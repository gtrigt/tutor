import React, { useEffect } from 'react';

interface WebVitalsData {
  LCP?: number;
  FID?: number;
  CLS?: number;
  FCP?: number;
  TTFB?: number;
}

export const WebVitals: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // LCP (Largest Contentful Paint)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry;
        if (lastEntry) {
          const lcp = lastEntry.startTime;
          console.log('LCP:', lcp);
          
          // Отправляем в Google Analytics если доступен
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'LCP',
              value: Math.round(lcp),
              non_interaction: true
            });
          }
        }
      });
      
      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.log('LCP observer error:', e);
      }

      // FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fid = entry.processingStart - entry.startTime;
          console.log('FID:', fid);
          
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'FID',
              value: Math.round(fid),
              non_interaction: true
            });
          }
        });
      });
      
      try {
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        console.log('FID observer error:', e);
      }

      // CLS (Cumulative Layout Shift)
      let clsValue = 0;
      let clsEntries: PerformanceEntry[] = [];
      
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
            clsEntries.push(entry);
          }
        });
        
        // Отправляем CLS каждые 5 секунд
        if (clsValue > 0) {
          console.log('CLS:', clsValue);
          
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'CLS',
              value: Math.round(clsValue * 1000) / 1000,
              non_interaction: true
            });
          }
        }
      });
      
      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.log('CLS observer error:', e);
      }

      // FCP (First Contentful Paint)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const firstEntry = entries[0];
        if (firstEntry) {
          const fcp = firstEntry.startTime;
          console.log('FCP:', fcp);
          
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'FCP',
              value: Math.round(fcp),
              non_interaction: true
            });
          }
        }
      });
      
      try {
        fcpObserver.observe({ entryTypes: ['first-contentful-paint'] });
      } catch (e) {
        console.log('FCP observer error:', e);
      }

      // TTFB (Time to First Byte)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        console.log('TTFB:', ttfb);
        
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'TTFB',
            value: Math.round(ttfb),
            non_interaction: true
          });
        }
      }

      // Отправляем метрики при уходе со страницы
      const sendWebVitals = () => {
        if (window.gtag) {
          // Отправляем итоговые значения
          const webVitals: WebVitalsData = {};
          
          if (clsValue > 0) {
            webVitals.CLS = clsValue;
          }
          
          // Отправляем как batch
          window.gtag('event', 'web_vitals_batch', {
            event_category: 'Web Vitals',
            custom_map: {
              'custom_parameter_1': 'cls_value',
              'custom_parameter_2': 'lcp_value',
              'custom_parameter_3': 'fid_value',
              'custom_parameter_4': 'fcp_value',
              'custom_parameter_5': 'ttfb_value'
            },
            cls_value: Math.round(clsValue * 1000) / 1000,
            lcp_value: 0, // Будет заполнено отдельно
            fid_value: 0, // Будет заполнено отдельно
            fcp_value: 0, // Будет заполнено отдельно
            ttfb_value: Math.round((navigationEntry?.responseStart - navigationEntry?.requestStart) || 0),
            non_interaction: true
          });
        }
      };

      // Отправляем метрики при уходе со страницы
      window.addEventListener('beforeunload', sendWebVitals);
      window.addEventListener('pagehide', sendWebVitals);

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
        window.removeEventListener('beforeunload', sendWebVitals);
        window.removeEventListener('pagehide', sendWebVitals);
      };
    }
  }, []);

  return null;
}; 