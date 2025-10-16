"use client";

import { AdminLayout } from "@/components/admin/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Users,
  Package,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    changeType: "positive" as const,
    icon: DollarSign,
    description: "from last month",
  },
  {
    title: "Total Orders",
    value: "2,350",
    change: "+15.3%",
    changeType: "positive" as const,
    icon: ShoppingCart,
    description: "from last month",
  },
  {
    title: "Total Customers",
    value: "1,234",
    change: "+5.2%",
    changeType: "positive" as const,
    icon: Users,
    description: "from last month",
  },
  {
    title: "Total Products",
    value: "156",
    change: "-2.1%",
    changeType: "negative" as const,
    icon: Package,
    description: "from last month",
  },
];

const recentOrders = [
  {
    id: "ORD-001",
    customer: "Sarah Johnson",
    product: "Summer Floral Dress",
    amount: "$89.99",
    status: "completed",
    date: "2024-01-15",
  },
  {
    id: "ORD-002",
    customer: "Emily Chen",
    product: "Elegant Evening Gown",
    amount: "$149.99",
    status: "pending",
    date: "2024-01-14",
  },
  {
    id: "ORD-003",
    customer: "Maria Garcia",
    product: "Casual Day Dress",
    amount: "$65.99",
    status: "shipped",
    date: "2024-01-13",
  },
  {
    id: "ORD-004",
    customer: "Lisa Wang",
    product: "Party Cocktail Dress",
    amount: "$125.99",
    status: "completed",
    date: "2024-01-12",
  },
];

const topProducts = [
  {
    name: "Summer Floral Dress",
    sales: 45,
    revenue: "$4,049.55",
    image: "/api/placeholder/60/60",
  },
  {
    name: "Elegant Evening Gown",
    sales: 32,
    revenue: "$4,799.68",
    image: "/api/placeholder/60/60",
  },
  {
    name: "Casual Day Dress",
    sales: 28,
    revenue: "$1,847.72",
    image: "/api/placeholder/60/60",
  },
];

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">
            Welcome back! Here's what's happening with your dress store today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  {stat.changeType === "positive" ? (
                    <ArrowUpRight className="h-3 w-3 text-green-600" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 text-red-600" />
                  )}
                  <span
                    className={
                      stat.changeType === "positive"
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {stat.change}
                  </span>
                  <span>{stat.description}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Orders and Top Products */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Recent Orders */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>
                Latest orders from your customers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between"
                  >
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{order.id}</p>
                      <p className="text-sm text-muted-foreground">
                        {order.customer} • {order.product}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {order.date}
                      </p>
                    </div>
                    <div className="text-right space-y-1">
                      <p className="text-sm font-medium">{order.amount}</p>
                      <Badge
                        variant={
                          order.status === "completed"
                            ? "success"
                            : order.status === "shipped"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Products */}
          <Card>
            <CardHeader>
              <CardTitle>Top Products</CardTitle>
              <CardDescription>Best selling dresses this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div
                    key={product.name}
                    className="flex items-center space-x-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-sm font-medium text-primary">
                        #{index + 1}
                      </span>
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">{product.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {product.sales} sales
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{product.revenue}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks you might want to perform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <button className="flex items-center space-x-3 p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors">
                <Package className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Add Product</p>
                  <p className="text-sm text-muted-foreground">
                    Add a new dress
                  </p>
                </div>
              </button>
              <button className="flex items-center space-x-3 p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors">
                <ShoppingCart className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">View Orders</p>
                  <p className="text-sm text-muted-foreground">Manage orders</p>
                </div>
              </button>
              <button className="flex items-center space-x-3 p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Customers</p>
                  <p className="text-sm text-muted-foreground">
                    View customers
                  </p>
                </div>
              </button>
              <button className="flex items-center space-x-3 p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors">
                <TrendingUp className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Analytics</p>
                  <p className="text-sm text-muted-foreground">View reports</p>
                </div>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
