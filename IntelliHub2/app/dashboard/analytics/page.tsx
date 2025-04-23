import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, Calendar, Download, LineChart, PieChart, Settings, TrendingDown, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Analytics & Insights</h1>
          <p className="text-muted-foreground">Analyze system performance and usage patterns.</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="year">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Gas Consumption</CardTitle>
            <BarChart3 className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32,450 m³</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500 font-medium">8%</span>
              <span className="ml-1">vs. previous period</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Oil Consumption</CardTitle>
            <BarChart3 className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,845 L</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingDown className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500 font-medium">5%</span>
              <span className="ml-1">vs. previous period</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Daily Gas Usage</CardTitle>
            <LineChart className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,082 m³</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="mr-1 h-4 w-4 text-amber-500" />
              <span className="text-amber-500 font-medium">3%</span>
              <span className="ml-1">vs. previous period</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Daily Oil Usage</CardTitle>
            <LineChart className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">428 L</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingDown className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500 font-medium">2%</span>
              <span className="ml-1">vs. previous period</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="usage" className="space-y-4">
        <TabsList>
          <TabsTrigger value="usage">Usage Analytics</TabsTrigger>
          <TabsTrigger value="efficiency">Efficiency</TabsTrigger>
          <TabsTrigger value="predictions">AI Predictions</TabsTrigger>
          <TabsTrigger value="anomalies">Anomaly Detection</TabsTrigger>
        </TabsList>

        <TabsContent value="usage" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Gas Consumption Trends</CardTitle>
                <CardDescription>Daily gas consumption over the last 30 days</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[350px] w-full bg-slate-100 rounded-md flex items-center justify-center">
                  <LineChart className="h-8 w-8 text-slate-400" />
                  <span className="ml-2 text-slate-500">Gas Consumption Chart</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usage Distribution</CardTitle>
                <CardDescription>Gas usage distribution by lane</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px] w-full bg-slate-100 rounded-md flex items-center justify-center">
                  <PieChart className="h-8 w-8 text-slate-400" />
                  <span className="ml-2 text-slate-500">Distribution Chart</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Peak Usage Hours</CardTitle>
                <CardDescription>Gas consumption by hour of day</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full bg-slate-100 rounded-md flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-slate-400" />
                  <span className="ml-2 text-slate-500">Hourly Usage Chart</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Weekly Patterns</CardTitle>
                <CardDescription>Gas consumption by day of week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full bg-slate-100 rounded-md flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-slate-400" />
                  <span className="ml-2 text-slate-500">Weekly Pattern Chart</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Seasonal Trends</CardTitle>
                <CardDescription>Monthly consumption patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full bg-slate-100 rounded-md flex items-center justify-center">
                  <LineChart className="h-8 w-8 text-slate-400" />
                  <span className="ml-2 text-slate-500">Seasonal Trend Chart</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="efficiency" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>System Efficiency</CardTitle>
                <CardDescription>Overall system efficiency metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px] w-full bg-slate-100 rounded-md flex items-center justify-center">
                  <LineChart className="h-8 w-8 text-slate-400" />
                  <span className="ml-2 text-slate-500">Efficiency Chart</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Distribution Loss Analysis</CardTitle>
                <CardDescription>Gas and oil distribution loss metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px] w-full bg-slate-100 rounded-md flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-slate-400" />
                  <span className="ml-2 text-slate-500">Loss Analysis Chart</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="predictions" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Demand Forecast</CardTitle>
                <CardDescription>AI-powered demand forecasting for next 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px] w-full bg-slate-100 rounded-md flex items-center justify-center">
                  <LineChart className="h-8 w-8 text-slate-400" />
                  <span className="ml-2 text-slate-500">Forecast Chart</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Maintenance Predictions</CardTitle>
                <CardDescription>Predictive maintenance schedule based on AI analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px] w-full bg-slate-100 rounded-md flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-slate-400" />
                  <span className="ml-2 text-slate-500">Maintenance Calendar</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="anomalies" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Anomaly Detection</CardTitle>
              <CardDescription>AI-detected anomalies in system behavior</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full bg-slate-100 rounded-md flex items-center justify-center">
                <LineChart className="h-8 w-8 text-slate-400" />
                <span className="ml-2 text-slate-500">Anomaly Detection Chart</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* AI Insights */}
      <Card>
        <CardHeader>
          <CardTitle>AI Insights</CardTitle>
          <CardDescription>Key insights generated by the AI system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-blue-50">
              <h3 className="text-sm font-medium mb-2 text-blue-800">Consumption Pattern Change</h3>
              <p className="text-sm text-blue-700">
                The AI has detected a 15% increase in evening gas consumption in Lane 2 over the past week. This may be
                due to seasonal changes or new household behaviors.
              </p>
            </div>

            <div className="p-4 rounded-lg border bg-green-50">
              <h3 className="text-sm font-medium mb-2 text-green-800">Efficiency Improvement</h3>
              <p className="text-sm text-green-700">
                System efficiency has improved by 7% following the maintenance performed on Lane 4 distribution line.
                Continuing this maintenance schedule is recommended.
              </p>
            </div>

            <div className="p-4 rounded-lg border bg-amber-50">
              <h3 className="text-sm font-medium mb-2 text-amber-800">Upcoming Demand Spike</h3>
              <p className="text-sm text-amber-700">
                Based on historical patterns and weather forecasts, the AI predicts a 20% increase in gas demand in the
                next 2 weeks. Consider adjusting supply accordingly.
              </p>
            </div>

            <div className="p-4 rounded-lg border bg-purple-50">
              <h3 className="text-sm font-medium mb-2 text-purple-800">Maintenance Recommendation</h3>
              <p className="text-sm text-purple-700">
                The AI recommends preventive maintenance for the pressure regulators in Lane 1 within the next 30 days
                based on performance metrics and usage patterns.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
