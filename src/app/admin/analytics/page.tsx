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
  TrendingDown,
  DollarSign,
  ShoppingCart,
  Users,
  Package,
  BarChart3,
  PieChart,
  Activity,
} from "lucide-react";

const analyticsData = {
  revenue: {
    current: "$45,231.89",
    previous: "$37,650.20",
    change: "+20.1%",
    trend: "up" as const,
  },
  orders: {
    current: "2,350",
    previous: "2,041",
    change: "+15.3%",
    trend: "up" as const,
  },
  customers: {
    current: "1,234",
    previous: "1,173",
    change: "+5.2%",
    trend: "up" as const,
  },
  products: {
    current: "156",
    previous: "159",
    change: "-2.1%",
    trend: "down" as const,
  },
};

const topCategories = [
  { name: "Casual Dresses", sales: 45, revenue: "$4,049.55", percentage: 35 },
  { name: "Formal Dresses", sales: 32, revenue: "$4,799.68", percentage: 25 },
  { name: "Party Dresses", sales: 28, revenue: "$3,527.72", percentage: 22 },
  { name: "Business Dresses", sales: 18, revenue: "$1,799.82", percentage: 18 },
];

const monthlyData = [
  { month: "Jan", revenue: 32000, orders: 1800 },
  { month: "Feb", revenue: 35000, orders: 1950 },
  { month: "Mar", revenue: 38000, orders: 2100 },
  { month: "Apr", revenue: 42000, orders: 2300 },
  { month: "May", revenue: 45000, orders: 2350 },
  { month: "Jun", revenue: 48000, orders: 2500 },
];

export default function AnalyticsPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600">
            Track your business performance and key metrics
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(analyticsData).map(([key, data]) => (
            <Card key={key}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </CardTitle>
                {key === "revenue" && (
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                )}
                {key === "orders" && (
                  <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                )}
                {key === "customers" && (
                  <Users className="h-4 w-4 text-muted-foreground" />
                )}
                {key === "products" && (
                  <Package className="h-4 w-4 text-muted-foreground" />
                )}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data.current}</div>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  {data.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 text-green-600" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-600" />
                  )}
                  <span
                    className={
                      data.trend === "up" ? "text-green-600" : "text-red-600"
                    }
                  >
                    {data.change}
                  </span>
                  <span>from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Revenue Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Revenue Trend</CardTitle>
              <CardDescription>
                Monthly revenue over the last 6 months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyData.map((data, index) => (
                  <div
                    key={data.month}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 text-sm font-medium">
                        {data.month}
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all duration-300"
                            style={{
                              width: `${(data.revenue / 50000) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-sm font-medium">
                      ${data.revenue.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Orders Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Orders Trend</CardTitle>
              <CardDescription>
                Monthly orders over the last 6 months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyData.map((data, index) => (
                  <div
                    key={data.month}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 text-sm font-medium">
                        {data.month}
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-green-500 rounded-full transition-all duration-300"
                            style={{
                              width: `${(data.orders / 2500) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-sm font-medium">
                      {data.orders.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Category Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Category Performance</CardTitle>
            <CardDescription>
              Sales breakdown by dress categories
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCategories.map((category, index) => (
                <div
                  key={category.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-8 text-sm font-medium">#{index + 1}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">
                          {category.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {category.sales} sales
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-300"
                          style={{ width: `${category.percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-medium">{category.revenue}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Average Order Value
              </CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$19.25</div>
              <p className="text-xs text-muted-foreground">
                +2.3% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Conversion Rate
              </CardTitle>
              <PieChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.2%</div>
              <p className="text-xs text-muted-foreground">
                +0.5% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Customer Retention
              </CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78.5%</div>
              <p className="text-xs text-muted-foreground">
                +1.2% from last month
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
