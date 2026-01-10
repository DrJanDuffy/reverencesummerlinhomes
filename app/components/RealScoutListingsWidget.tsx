import { useEffect, useRef } from "react";

interface RealScoutListingsWidgetProps {
  /**
   * Sort order for listings
   * @default "NEWEST"
   */
  sortOrder?: "NEWEST" | "PRICE_LOW_TO_HIGH" | "PRICE_HIGH_TO_LOW" | "SQUARE_FEET" | "BEDS" | "BATHS";
  
  /**
   * Listing statuses to display (comma-separated)
   * @default "For Sale"
   */
  listingStatus?: string;
  
  /**
   * Property types (comma-separated, e.g., ",SFR" for Single Family Residence)
   * @default ",SFR"
   */
  propertyTypes?: string;
  
  /**
   * Minimum price filter
   */
  priceMin?: number;
  
  /**
   * Maximum price filter
   */
  priceMax?: number;
  
  /**
   * Custom CSS class name
   */
  className?: string;
  
  /**
   * Title to display above the widget
   */
  title?: string;
  
  /**
   * Subtitle to display above the widget
   */
  subtitle?: string;
}

/**
 * RealScout Office Listings Widget Component
 * 
 * Displays active property listings from RealScout.
 * The script is loaded once in root.tsx, so this component only renders the widget element.
 * 
 * For maximum conversion, place this widget:
 * - Homepage: After hero section
 * - Properties page: Main content area
 * - Buying pages: After initial content
 * - Communities pages: After community description
 * - Contact/Valuation pages: To show inventory and create urgency
 */
export function RealScoutListingsWidget({
  sortOrder = "NEWEST",
  listingStatus = "For Sale",
  propertyTypes = ",SFR",
  priceMin,
  priceMax,
  className = "",
  title,
  subtitle,
}: RealScoutListingsWidgetProps) {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for RealScout script to load and then create the widget element
    const createWidget = () => {
      if (!widgetRef.current) return;

      // Clear any existing content
      widgetRef.current.innerHTML = "";

      // Create the web component element
      const widget = document.createElement("realscout-office-listings");
      widget.setAttribute("agent-encoded-id", "QWdlbnQtMjI1MDUw");
      widget.setAttribute("sort-order", sortOrder);
      widget.setAttribute("listing-status", listingStatus);
      widget.setAttribute("property-types", propertyTypes);

      if (priceMin !== undefined) {
        widget.setAttribute("price-min", priceMin.toString());
      }

      if (priceMax !== undefined) {
        widget.setAttribute("price-max", priceMax.toString());
      }

      widgetRef.current.appendChild(widget);
    };

    // Check if RealScout is already loaded
    if (customElements.get("realscout-office-listings")) {
      createWidget();
    } else {
      // Wait for the script to load
      let checkInterval: NodeJS.Timeout | null = setInterval(() => {
        if (customElements.get("realscout-office-listings")) {
          if (checkInterval) {
            clearInterval(checkInterval);
            checkInterval = null;
          }
          createWidget();
        }
      }, 100);

      // Timeout after 10 seconds
      setTimeout(() => {
        if (checkInterval) {
          clearInterval(checkInterval);
          checkInterval = null;
        }
      }, 10000);
    }
  }, [sortOrder, listingStatus, propertyTypes, priceMin, priceMax]);

  return (
    <div className={`realscout-listings-widget py-8 ${className}`}>
      {(title || subtitle) && (
        <div className="mb-8 text-center">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
      
      <div ref={widgetRef} className="w-full" />
    </div>
  );
}