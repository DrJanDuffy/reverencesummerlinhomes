/**
 * Follow Up Boss MCP Connector
 * 
 * Manages connections to Follow Up Boss CRM API
 * Handles lead submission, contact management, and CRM operations
 */

import { HTTPMCPClient } from "./http-client";
import type {
  MCPRequestOptions,
  MCPResponse,
  HealthCheckResult,
} from "../types";

export interface FollowUpBossLead {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  source?: string;
  message?: string;
  propertyInterest?: string;
  tags?: string[];
  customFields?: Record<string, string>;
}

export interface FollowUpBossContact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  customFields: Record<string, unknown>;
}

export interface FollowUpBossProperty {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  status: string;
  mlsNumber?: string;
}

export class FollowUpBossConnector extends HTTPMCPClient {
  readonly id = "followupboss";
  readonly name = "Follow Up Boss Connector";

  /**
   * Health check endpoint
   */
  protected getHealthCheckPath(): string | null {
    return "/people"; // Lightweight endpoint to test connectivity
  }

  /**
   * Submit a new lead to Follow Up Boss
   */
  async submitLead(lead: FollowUpBossLead): Promise<MCPResponse<FollowUpBossContact>> {
    return this.request<FollowUpBossContact>({
      method: "POST",
      path: "/people",
      body: {
        firstName: lead.firstName,
        lastName: lead.lastName,
        emails: [{ address: lead.email, primary: true }],
        phones: [{ number: lead.phone, primary: true }],
        source: lead.source || "Website Contact Form",
        note: lead.message,
        tags: lead.tags || [],
        customFields: lead.customFields || {},
        propertyInterest: lead.propertyInterest,
      },
    });
  }

  /**
   * Get a contact by ID
   */
  async getContact(contactId: string): Promise<MCPResponse<FollowUpBossContact>> {
    return this.request<FollowUpBossContact>({
      method: "GET",
      path: `/people/${contactId}`,
    });
  }

  /**
   * Search for contacts
   */
  async searchContacts(query: string): Promise<MCPResponse<FollowUpBossContact[]>> {
    return this.request<FollowUpBossContact[]>({
      method: "GET",
      path: "/people/search",
      query: { q: query },
    });
  }

  /**
   * Update a contact
   */
  async updateContact(
    contactId: string,
    updates: Partial<FollowUpBossContact>
  ): Promise<MCPResponse<FollowUpBossContact>> {
    return this.request<FollowUpBossContact>({
      method: "PUT",
      path: `/people/${contactId}`,
      body: updates,
    });
  }

  /**
   * Get properties/listings
   */
  async getProperties(filters?: {
    status?: string;
    city?: string;
    state?: string;
    minPrice?: number;
    maxPrice?: number;
  }): Promise<MCPResponse<FollowUpBossProperty[]>> {
    return this.request<FollowUpBossProperty[]>({
      method: "GET",
      path: "/properties",
      query: filters as Record<string, string | number>,
    });
  }

  /**
   * Add a note to a contact
   */
  async addNote(contactId: string, note: string): Promise<MCPResponse<{ id: string; note: string; createdAt: string }>> {
    return this.request({
      method: "POST",
      path: `/people/${contactId}/notes`,
      body: { note },
    });
  }

  /**
   * Health check override for Follow Up Boss
   */
  async healthCheck(): Promise<HealthCheckResult> {
    const startTime = Date.now();

    try {
      // Use a lightweight endpoint for health check
      const response = await this.request({
        method: "GET",
        path: "/people",
        query: { limit: 1 },
        retry: false,
      });

      const latency = Date.now() - startTime;
      const healthy = response.success && response.status === 200;

      return {
        endpointId: this.id,
        status: healthy ? "connected" : "error",
        healthy,
        latency,
        lastChecked: new Date(),
        metadata: {
          statusCode: response.status,
        },
      };
    } catch (error) {
      return {
        endpointId: this.id,
        status: "error",
        healthy: false,
        latency: Date.now() - startTime,
        error: error instanceof Error ? error.message : "Health check failed",
        lastChecked: new Date(),
      };
    }
  }
}
