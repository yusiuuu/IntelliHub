import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, BarChart3, CheckCircle, Flame, Info, PieChart, Settings, Thermometer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function GasMonitoringPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Gas Monitoring</h1>
          <p className="text-muted-foreground">Monitor and manage gas distribution across all connected households.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Export Data</Button>
          <Button>Configure Alerts</Button>
        </div>
      </div>

      {/* Alert Section */}
      <Alert variant="destructive" className="border-red-600">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Critical Alert</AlertTitle>
        <AlertDescription>Gas leak detected in Lane 3, House 45. Technician has been dispatched.</AlertDescription>
      </Alert>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Gas Flow</CardTitle>
            <Flame className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,245 m³</div>
            <p className="text-xs text-muted-foreground">Today's total distribution</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Pressure</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-500"
            >
              <path d="M12 2v2"></path>
              <path d="M12 14v8"></path>
              <path d="M12 14a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"></path>
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5.2 bar</div>
            <p className="text-xs text-muted-foreground">Within normal range</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Temperature</CardTitle>
            <Thermometer className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.5°C</div>
            <p className="text-xs text-muted-foreground">Average system temperature</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">96%</div>
            <p className="text-xs text-muted-foreground">1 active alert</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="lanes">Lane Monitoring</TabsTrigger>
          <TabsTrigger value="households">Households</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Gas Consumption Trends</CardTitle>
                <CardDescription>Hourly gas consumption over the last 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] w-full bg-slate-100 rounded-md flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-slate-400" />
                  <span className="ml-2 text-slate-500">Consumption Chart</span>
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Distribution by Lane</CardTitle>
                <CardDescription>Gas distribution percentage by lane</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full bg-slate-100 rounded-md flex items-center justify-center mb-4">
                  <PieChart className="h-8 w-8 text-slate-400" />
                  <span className="ml-2 text-slate-500">Distribution Chart</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Lane 1</span>
                    <span className="text-sm font-medium">28%</span>
                  </div>
                  <Progress value={28} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-sm">Lane 2</span>
                    <span className="text-sm font-medium">35%</span>
                  </div>
                  <Progress value={35} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-sm">Lane 3</span>
                    <span className="text-sm font-medium">22%</span>
                  </div>
                  <Progress value={22} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-sm">Lane 4</span>
                    <span className="text-sm font-medium">15%</span>
                  </div>
                  <Progress value={15} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="lanes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Lane Monitoring</CardTitle>
              <CardDescription>Gas flow and status for each distribution lane</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Lane ID</TableHead>
                    <TableHead>Flow Rate (m³/h)</TableHead>
                    <TableHead>Pressure (bar)</TableHead>
                    <TableHead>Temperature (°C)</TableHead>
                    <TableHead>Households</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Lane 1</TableCell>
                    <TableCell>42.5</TableCell>
                    <TableCell>5.1</TableCell>
                    <TableCell>24.2</TableCell>
                    <TableCell>86</TableCell>
                    <TableCell>
                      <span className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                        Operational
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Lane 2</TableCell>
                    <TableCell>53.8</TableCell>
                    <TableCell>5.3</TableCell>
                    <TableCell>24.8</TableCell>
                    <TableCell>112</TableCell>
                    <TableCell>
                      <span className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                        Operational
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Lane 3</TableCell>
                    <TableCell>32.1</TableCell>
                    <TableCell>4.9</TableCell>
                    <TableCell>25.1</TableCell>
                    <TableCell>78</TableCell>
                    <TableCell>
                      <span className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                        Alert
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Lane 4</TableCell>
                    <TableCell>24.6</TableCell>
                    <TableCell>5.0</TableCell>
                    <TableCell>24.0</TableCell>
                    <TableCell>66</TableCell>
                    <TableCell>
                      <span className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                        Operational
                      </span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="households" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Household Consumption</CardTitle>
                <CardDescription>Gas consumption data for connected households</CardDescription>
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
                    <TableHead>House ID</TableHead>
                    <TableHead>Lane</TableHead>
                    <TableHead>Today's Usage (m³)</TableHead>
                    <TableHead>Monthly Avg (m³)</TableHead>
                    <TableHead>Last Reading</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">House 23</TableCell>
                    <TableCell>Lane 1</TableCell>
                    <TableCell>3.2</TableCell>
                    <TableCell>2.8</TableCell>
                    <TableCell>15 min ago</TableCell>
                    <TableCell>
                      <span className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-amber-500 mr-2"></div>
                        High Usage
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">House 45</TableCell>
                    <TableCell>Lane 3</TableCell>
                    <TableCell>1.8</TableCell>
                    <TableCell>2.1</TableCell>
                    <TableCell>5 min ago</TableCell>
                    <TableCell>
                      <span className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                        Alert
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">House 17</TableCell>
                    <TableCell>Lane 2</TableCell>
                    <TableCell>2.9</TableCell>
                    <TableCell>2.0</TableCell>
                    <TableCell>10 min ago</TableCell>
                    <TableCell>
                      <span className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-amber-500 mr-2"></div>
                        High Usage
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">House 56</TableCell>
                    <TableCell>Lane 2</TableCell>
                    <TableCell>1.5</TableCell>
                    <TableCell>1.6</TableCell>
                    <TableCell>8 min ago</TableCell>
                    <TableCell>
                      <span className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                        Normal
                      </span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Maintenance Schedule</CardTitle>
              <CardDescription>Upcoming and recent maintenance activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Scheduled Maintenance</AlertTitle>
                  <AlertDescription>Lane 3 distribution line - Tomorrow, 9:00 AM to 11:00 AM</AlertDescription>
                </Alert>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Component</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Technician</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Lane 3 Pipeline</TableCell>
                      <TableCell>Repair</TableCell>
                      <TableCell>Tomorrow, 9:00 AM</TableCell>
                      <TableCell>2 hours</TableCell>
                      <TableCell>Rajesh Kumar</TableCell>
                      <TableCell>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Scheduled
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Main Pressure Valve</TableCell>
                      <TableCell>Inspection</TableCell>
                      <TableCell>May 25, 10:00 AM</TableCell>
                      <TableCell>1 hour</TableCell>
                      <TableCell>Amit Singh</TableCell>
                      <TableCell>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Scheduled
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Lane 4 Flow Sensor</TableCell>
                      <TableCell>Replacement</TableCell>
                      <TableCell>May 20, 2:00 PM</TableCell>
                      <TableCell>45 minutes</TableCell>
                      <TableCell>Priya Sharma</TableCell>
                      <TableCell>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Completed
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">House 45 Connection</TableCell>
                      <TableCell>Emergency Repair</TableCell>
                      <TableCell>Today, 10:30 AM</TableCell>
                      <TableCell>1 hour</TableCell>
                      <TableCell>Vikram Patel</TableCell>
                      <TableCell>
                        <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          In Progress
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
