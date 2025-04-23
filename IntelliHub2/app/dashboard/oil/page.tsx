import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { BarChart3, CheckCircle, Droplets, Info, LineChart, Settings, Thermometer, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function OilMonitoringPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Oil Monitoring</h1>
          <p className="text-muted-foreground">Monitor and manage oil storage and distribution.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Export Data</Button>
          <Button>Schedule Delivery</Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Main Tank Level</CardTitle>
            <Droplets className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <Progress value={78} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-2">Estimated 12 days remaining</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Temperature</CardTitle>
            <Thermometer className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">22.3°C</div>
            <p className="text-xs text-muted-foreground">Within safe range</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Daily Consumption</CardTitle>
            <BarChart3 className="h-4 w-4 text-violet-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245 L</div>
            <p className="text-xs text-muted-foreground">5% below average</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">100%</div>
            <p className="text-xs text-muted-foreground">All systems operational</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tanks">Storage Tanks</TabsTrigger>
          <TabsTrigger value="distribution">Distribution</TabsTrigger>
          <TabsTrigger value="deliveries">Deliveries</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Oil Consumption Trends</CardTitle>
                <CardDescription>Daily oil consumption over the last 30 days</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] w-full bg-slate-100 rounded-md flex items-center justify-center">
                  <LineChart className="h-8 w-8 text-slate-400" />
                  <span className="ml-2 text-slate-500">Consumption Chart</span>
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Storage Status</CardTitle>
                <CardDescription>Current status of all storage tanks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Main Storage Tank (10,000 L)</span>
                      <span className="text-sm font-medium">78%</span>
                    </div>
                    <Progress value={78} className="h-3" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Kerosene Tank (5,000 L)</span>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                    <Progress value={65} className="h-3" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Diesel Tank (3,000 L)</span>
                      <span className="text-sm font-medium">92%</span>
                    </div>
                    <Progress value={92} className="h-3" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Reserve Tank (2,000 L)</span>
                      <span className="text-sm font-medium">100%</span>
                    </div>
                    <Progress value={100} className="h-3" />
                  </div>

                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Next Scheduled Delivery</AlertTitle>
                    <AlertDescription>Main tank refill scheduled for May 28, 2023</AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tanks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Storage Tanks</CardTitle>
              <CardDescription>Detailed information about all storage tanks</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tank ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Capacity (L)</TableHead>
                    <TableHead>Current Level (L)</TableHead>
                    <TableHead>Temperature (°C)</TableHead>
                    <TableHead>Last Refilled</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">TANK-001</TableCell>
                    <TableCell>Main Storage</TableCell>
                    <TableCell>10,000</TableCell>
                    <TableCell>7,800</TableCell>
                    <TableCell>22.3</TableCell>
                    <TableCell>May 10, 2023</TableCell>
                    <TableCell>
                      <span className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                        Normal
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">TANK-002</TableCell>
                    <TableCell>Kerosene</TableCell>
                    <TableCell>5,000</TableCell>
                    <TableCell>3,250</TableCell>
                    <TableCell>21.8</TableCell>
                    <TableCell>May 5, 2023</TableCell>
                    <TableCell>
                      <span className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                        Normal
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">TANK-003</TableCell>
                    <TableCell>Diesel</TableCell>
                    <TableCell>3,000</TableCell>
                    <TableCell>2,760</TableCell>
                    <TableCell>22.1</TableCell>
                    <TableCell>May 15, 2023</TableCell>
                    <TableCell>
                      <span className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                        Normal
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">TANK-004</TableCell>
                    <TableCell>Reserve</TableCell>
                    <TableCell>2,000</TableCell>
                    <TableCell>2,000</TableCell>
                    <TableCell>21.5</TableCell>
                    <TableCell>May 1, 2023</TableCell>
                    <TableCell>
                      <span className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                        Full
                      </span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="distribution" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Distribution Log</CardTitle>
                <CardDescription>Recent oil distribution activities</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Quantity (L)</TableHead>
                    <TableHead>Destination</TableHead>
                    <TableHead>Operator</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">TRX-4582</TableCell>
                    <TableCell>Today, 8:15 AM</TableCell>
                    <TableCell>Kerosene</TableCell>
                    <TableCell>50</TableCell>
                    <TableCell>Community Center</TableCell>
                    <TableCell>Rahul Mehta</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">TRX-4581</TableCell>
                    <TableCell>Today, 7:30 AM</TableCell>
                    <TableCell>Diesel</TableCell>
                    <TableCell>75</TableCell>
                    <TableCell>Backup Generator</TableCell>
                    <TableCell>Rahul Mehta</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">TRX-4580</TableCell>
                    <TableCell>Yesterday, 4:45 PM</TableCell>
                    <TableCell>Kerosene</TableCell>
                    <TableCell>120</TableCell>
                    <TableCell>Village Distribution</TableCell>
                    <TableCell>Anita Desai</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">TRX-4579</TableCell>
                    <TableCell>Yesterday, 2:10 PM</TableCell>
                    <TableCell>Diesel</TableCell>
                    <TableCell>200</TableCell>
                    <TableCell>Water Pumping Station</TableCell>
                    <TableCell>Anita Desai</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="deliveries" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Delivery Schedule</CardTitle>
              <CardDescription>Upcoming and recent oil deliveries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Alert>
                  <Truck className="h-4 w-4" />
                  <AlertTitle>Upcoming Delivery</AlertTitle>
                  <AlertDescription>Main tank refill scheduled for May 28, 2023 - 10,000 L</AlertDescription>
                </Alert>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Delivery ID</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Supplier</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Quantity (L)</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">DEL-1089</TableCell>
                      <TableCell>May 28, 2023</TableCell>
                      <TableCell>Northeast Petroleum</TableCell>
                      <TableCell>Main Storage</TableCell>
                      <TableCell>10,000</TableCell>
                      <TableCell>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Scheduled
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">DEL-1088</TableCell>
                      <TableCell>May 15, 2023</TableCell>
                      <TableCell>Northeast Petroleum</TableCell>
                      <TableCell>Diesel</TableCell>
                      <TableCell>3,000</TableCell>
                      <TableCell>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Completed
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">DEL-1087</TableCell>
                      <TableCell>May 10, 2023</TableCell>
                      <TableCell>Northeast Petroleum</TableCell>
                      <TableCell>Main Storage</TableCell>
                      <TableCell>8,000</TableCell>
                      <TableCell>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Completed
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">DEL-1086</TableCell>
                      <TableCell>May 5, 2023</TableCell>
                      <TableCell>Northeast Petroleum</TableCell>
                      <TableCell>Kerosene</TableCell>
                      <TableCell>5,000</TableCell>
                      <TableCell>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Completed
                        </span>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
