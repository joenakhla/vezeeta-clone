'use client';

import { useEffect } from 'react';

/**
 * Sets the Zoho SalesIQ department for the current page.
 * This routes the chat widget to different support teams:
 * - "Medical Bookings" for doctor pages
 * - "Pharmacy & Diagnostics" for pharmacy, labs, scans pages
 *
 * In Zoho SalesIQ admin, create these departments and assign agents accordingly.
 */
export default function SalesIQDepartment({ department }) {
  useEffect(() => {
    // Wait for SalesIQ to load, then set the department
    function setDepartment() {
      if (window.$zoho && window.$zoho.salesiq) {
        window.$zoho.salesiq.ready = function () {
          window.$zoho.salesiq.visitor.department(department);
        };
        // Also try setting it immediately in case it's already loaded
        try {
          window.$zoho.salesiq.visitor.department(department);
        } catch (e) {
          // SalesIQ not fully loaded yet, the ready callback will handle it
        }
      }
    }

    // Try immediately
    setDepartment();

    // Also retry after a short delay to catch late loads
    const timer = setTimeout(setDepartment, 2000);

    return () => clearTimeout(timer);
  }, [department]);

  // This component renders nothing visible
  return null;
}
