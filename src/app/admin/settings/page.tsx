"use client";

import { useState } from "react";
import { AdminLayout } from "@/components/admin/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Settings,
  Store,
  Mail,
  Shield,
  Bell,
  Palette,
  Globe,
  CreditCard,
  Truck,
} from "lucide-react";

export default function SettingsPage() {
  const [storeName, setStoreName] = useState("Hiraya Dress Store");
  const [storeEmail, setStoreEmail] = useState("admin@hiraya.com");
  const [storePhone, setStorePhone] = useState("+1 (555) 123-4567");
  const [storeAddress, setStoreAddress] = useState(
    "123 Fashion Street, New York, NY 10001"
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">
            Manage your store settings and preferences
          </p>
        </div>

        {/* Settings Sections */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Store Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Store className="h-5 w-5" />
                <span>Store Information</span>
              </CardTitle>
              <CardDescription>
                Update your store details and contact information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="store-name">Store Name</Label>
                <Input
                  id="store-name"
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  placeholder="Enter store name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="store-email">Store Email</Label>
                <Input
                  id="store-email"
                  type="email"
                  value={storeEmail}
                  onChange={(e) => setStoreEmail(e.target.value)}
                  placeholder="Enter store email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="store-phone">Store Phone</Label>
                <Input
                  id="store-phone"
                  value={storePhone}
                  onChange={(e) => setStorePhone(e.target.value)}
                  placeholder="Enter store phone"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="store-address">Store Address</Label>
                <Input
                  id="store-address"
                  value={storeAddress}
                  onChange={(e) => setStoreAddress(e.target.value)}
                  placeholder="Enter store address"
                />
              </div>
              <Button className="w-full">Save Store Information</Button>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <span>Notifications</span>
              </CardTitle>
              <CardDescription>
                Configure your notification preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">New Orders</p>
                    <p className="text-sm text-muted-foreground">
                      Get notified when new orders are placed
                    </p>
                  </div>
                  <Badge variant="success">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Low Stock Alerts</p>
                    <p className="text-sm text-muted-foreground">
                      Get notified when products are running low
                    </p>
                  </div>
                  <Badge variant="success">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Customer Reviews</p>
                    <p className="text-sm text-muted-foreground">
                      Get notified when customers leave reviews
                    </p>
                  </div>
                  <Badge variant="secondary">Disabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Marketing Updates</p>
                    <p className="text-sm text-muted-foreground">
                      Get notified about marketing opportunities
                    </p>
                  </div>
                  <Badge variant="secondary">Disabled</Badge>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Manage Notifications
              </Button>
            </CardContent>
          </Card>

          {/* Payment Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5" />
                <span>Payment Settings</span>
              </CardTitle>
              <CardDescription>
                Configure payment methods and processing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Credit Cards</p>
                    <p className="text-sm text-muted-foreground">
                      Accept Visa, Mastercard, American Express
                    </p>
                  </div>
                  <Badge variant="success">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">PayPal</p>
                    <p className="text-sm text-muted-foreground">
                      Accept PayPal payments
                    </p>
                  </div>
                  <Badge variant="success">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Apple Pay</p>
                    <p className="text-sm text-muted-foreground">
                      Accept Apple Pay payments
                    </p>
                  </div>
                  <Badge variant="secondary">Inactive</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Google Pay</p>
                    <p className="text-sm text-muted-foreground">
                      Accept Google Pay payments
                    </p>
                  </div>
                  <Badge variant="secondary">Inactive</Badge>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Configure Payments
              </Button>
            </CardContent>
          </Card>

          {/* Shipping Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Truck className="h-5 w-5" />
                <span>Shipping Settings</span>
              </CardTitle>
              <CardDescription>
                Configure shipping options and rates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Standard Shipping</p>
                    <p className="text-sm text-muted-foreground">
                      5-7 business days
                    </p>
                  </div>
                  <Badge variant="success">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Express Shipping</p>
                    <p className="text-sm text-muted-foreground">
                      2-3 business days
                    </p>
                  </div>
                  <Badge variant="success">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Overnight Shipping</p>
                    <p className="text-sm text-muted-foreground">
                      Next business day
                    </p>
                  </div>
                  <Badge variant="secondary">Inactive</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Free Shipping</p>
                    <p className="text-sm text-muted-foreground">
                      Orders over $100
                    </p>
                  </div>
                  <Badge variant="success">Active</Badge>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Configure Shipping
              </Button>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Security</span>
              </CardTitle>
              <CardDescription>
                Manage your account security settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security
                    </p>
                  </div>
                  <Badge variant="secondary">Disabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Login Notifications</p>
                    <p className="text-sm text-muted-foreground">
                      Get notified of new login attempts
                    </p>
                  </div>
                  <Badge variant="success">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Session Timeout</p>
                    <p className="text-sm text-muted-foreground">
                      Auto-logout after 30 minutes
                    </p>
                  </div>
                  <Badge variant="success">Enabled</Badge>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Update Security Settings
              </Button>
            </CardContent>
          </Card>

          {/* Appearance Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Palette className="h-5 w-5" />
                <span>Appearance</span>
              </CardTitle>
              <CardDescription>
                Customize the look and feel of your store
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Theme</p>
                    <p className="text-sm text-muted-foreground">Light theme</p>
                  </div>
                  <Badge variant="outline">Light</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Primary Color</p>
                    <p className="text-sm text-muted-foreground">
                      Blue (#3B82F6)
                    </p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-gray-200" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Logo</p>
                    <p className="text-sm text-muted-foreground">Hiraya Logo</p>
                  </div>
                  <Badge variant="outline">Uploaded</Badge>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Customize Appearance
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
