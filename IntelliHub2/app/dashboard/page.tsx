import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, ArrowDown, ArrowUp, BarChart3, CheckCircle, Droplets, Flame, Info, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, John. Here's an overview of your IntelliHUB system.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Download Report</Button>
          <Button>View Alerts</Button>
        </div>
      </div>

      {/* Alert Section */}
      <Alert variant="destructive" className="border-red-600">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Critical Alert</AlertTitle>
        <AlertDescription>
          Gas leak detected in Lane 3, House 45. Technician has been dispatched.
          <Link href="/dashboard/alerts" className="underline ml-2">
            View details
          </Link>
        </AlertDescription>
      </Alert>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Gas Usage</CardTitle>
            <Flame className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,245 m³</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500 font-medium">12%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Oil Storage Level</CardTitle>
            <Droplets className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowDown className="mr-1 h-4 w-4 text-amber-500" />
              <span className="text-amber-500 font-medium">5%</span> from last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Households</CardTitle>
            <Users className="h-4 w-4 text-violet-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500 font-medium">8%</span> new connections
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">96%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500 font-medium">3%</span> from last check
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="gas">Gas Distribution</TabsTrigger>
          <TabsTrigger value="oil">Oil Monitoring</TabsTrigger>
          <TabsTrigger value="alerts">Recent Alerts</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Usage Trends</CardTitle>
                <CardDescription>Gas and oil consumption over the last 30 days</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] w-full bg-slate-100 rounded-md flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-slate-400" />
                  <span className="ml-2 text-slate-500">Usage Chart Visualization</span>
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>System Status</CardTitle>
                <CardDescription>Current status of all system components</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-sm font-medium">Main Gas Pipeline</span>
                    </div>
                    <span className="text-sm text-green-500">Operational</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-sm font-medium">Oil Storage Tanks</span>
                    </div>
                    <span className="text-sm text-green-500">Operational</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-sm font-medium">IoT Sensor Network</span>
                    </div>
                    <span className="text-sm text-green-500">Operational</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                      <span className="text-sm font-medium">Lane 3 Distribution</span>
                    </div>
                    <span className="text-sm text-amber-500">Maintenance</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <span className="text-sm font-medium">House 45 Connection</span>
                    </div>
                    <span className="text-sm text-red-500">Alert</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-sm font-medium">Solar Power System</span>
                    </div>
                    <span className="text-sm text-green-500">Operational</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-sm font-medium">Backup Battery</span>
                    </div>
                    <span className="text-sm text-green-500">92% Charged</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="gas" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gas Distribution Network</CardTitle>
              <CardDescription>Current status of the gas distribution network</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full bg-slate-100 rounded-md flex items-center justify-center">
                <Info className="h-8 w-8 text-slate-400" />
                <span className="ml-2 text-slate-500">Gas Network Visualization</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="oil" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Oil Storage & Distribution</CardTitle>
              <CardDescription>Current status of oil storage and distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full bg-slate-100 rounded-md flex items-center justify-center">
                <Info className="h-8 w-8 text-slate-400" />
                <span className="ml-2 text-slate-500">Oil Storage Visualization</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Alerts</CardTitle>
              <CardDescription>Recent system alerts and notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Gas leak detected</AlertTitle>
                  <AlertDescription>Lane 3, House 45 - Detected at 10:23 AM today</AlertDescription>
                </Alert>
                <Alert variant="warning">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Unusual gas consumption</AlertTitle>
                  <AlertDescription>Lane 2, House 17 - 45% higher than average</AlertDescription>
                </Alert>
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Maintenance scheduled</AlertTitle>
                  <AlertDescription>Lane 3 distribution line - Tomorrow, 9:00 AM to 11:00 AM</AlertDescription>
                </Alert>
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Oil delivery completed</AlertTitle>
                  <AlertDescription>Main storage tank refilled - Today at 8:15 AM</AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest activities and events in the system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-2 rounded-full">
                <Flame className="h-5 w-5 text-orange-500" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Gas usage spike detected</p>
                <p className="text-xs text-gray-500">Lane 1, House 23 - 15 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <Droplets className="h-5 w-5 text-blue-500" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Oil level below 80%</p>
                <p className="text-xs text-gray-500">Main storage tank - 1 hour ago</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-2 rounded-full">
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Maintenance completed</p>
                <p className="text-xs text-gray-500">Lane 4 distribution line - 3 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-violet-100 p-2 rounded-full">
                <Users className="h-5 w-5 text-violet-500" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">New household connected</p>
                <p className="text-xs text-gray-500">Lane 2, House 56 - 5 hours ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
