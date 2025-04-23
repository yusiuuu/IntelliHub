import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, CheckCircle2, Clock, Droplets, Flame, Settings, ThumbsUp, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AlertsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Alerts & Notifications</h1>
          <p className="text-muted-foreground">Monitor and manage system alerts and notifications.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Export Alerts</Button>
          <Button>Configure Alerts</Button>
        </div>
      </div>

      {/* Critical Alerts Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Critical Alerts</h2>
        <Alert variant="destructive" className="border-red-600">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Gas leak detected</AlertTitle>
          <AlertDescription className="flex flex-col">
            <span>Lane 3, House 45 - Detected at 10:23 AM today</span>
            <div className="mt-2">
              <Button size="sm" variant="outline" className="mr-2">
                Assign Technician
              </Button>
              <Button size="sm">View Details</Button>
            </div>
          </AlertDescription>
        </Alert>

        <Alert variant="destructive" className="border-red-600">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Pressure spike detected</AlertTitle>
          <AlertDescription className="flex flex-col">
            <span>Lane 2 main pipeline - Detected at 11:05 AM today</span>
            <div className="mt-2">
              <Button size="sm" variant="outline" className="mr-2">
                Assign Technician
              </Button>
              <Button size="sm">View Details</Button>
            </div>
          </AlertDescription>
        </Alert>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="all">All Alerts</TabsTrigger>
            <TabsTrigger value="gas">Gas Alerts</TabsTrigger>
            <TabsTrigger value="oil">Oil Alerts</TabsTrigger>
            <TabsTrigger value="system">System Alerts</TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Alerts</CardTitle>
              <CardDescription>View and manage all system alerts</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Alert ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">ALT-1245</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Flame className="h-4 w-4 text-red-500 mr-2" />
                        Gas Leak
                      </div>
                    </TableCell>
                    <TableCell>Lane 3, House 45</TableCell>
                    <TableCell>Today, 10:23 AM</TableCell>
                    <TableCell>
                      <Badge variant="destructive">Critical</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                        In Progress
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">ALT-1244</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Flame className="h-4 w-4 text-red-500 mr-2" />
                        Pressure Spike
                      </div>
                    </TableCell>
                    <TableCell>Lane 2 Pipeline</TableCell>
                    <TableCell>Today, 11:05 AM</TableCell>
                    <TableCell>
                      <Badge variant="destructive">Critical</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                        In Progress
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">ALT-1243</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Flame className="h-4 w-4 text-orange-500 mr-2" />
                        High Usage
                      </div>
                    </TableCell>
                    <TableCell>Lane 2, House 17</TableCell>
                    <TableCell>Today, 9:45 AM</TableCell>
                    <TableCell>
                      <Badge variant="warning">High</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                        Monitoring
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">ALT-1242</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Droplets className="h-4 w-4 text-blue-500 mr-2" />
                        Low Oil Level
                      </div>
                    </TableCell>
                    <TableCell>Kerosene Tank</TableCell>
                    <TableCell>Yesterday, 4:30 PM</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                        Medium
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                        Resolved
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gas" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gas System Alerts</CardTitle>
              <CardDescription>Alerts related to the gas distribution system</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Alert ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">ALT-1245</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Flame className="h-4 w-4 text-red-500 mr-2" />
                        Gas Leak
                      </div>
                    </TableCell>
                    <TableCell>Lane 3, House 45</TableCell>
                    <TableCell>Today, 10:23 AM</TableCell>
                    <TableCell>
                      <Badge variant="destructive">Critical</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                        In Progress
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">ALT-1244</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Flame className="h-4 w-4 text-red-500 mr-2" />
                        Pressure Spike
                      </div>
                    </TableCell>
                    <TableCell>Lane 2 Pipeline</TableCell>
                    <TableCell>Today, 11:05 AM</TableCell>
                    <TableCell>
                      <Badge variant="destructive">Critical</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                        In Progress
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">ALT-1243</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Flame className="h-4 w-4 text-orange-500 mr-2" />
                        High Usage
                      </div>
                    </TableCell>
                    <TableCell>Lane 2, House 17</TableCell>
                    <TableCell>Today, 9:45 AM</TableCell>
                    <TableCell>
                      <Badge variant="warning">High</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                        Monitoring
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="oil" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Oil System Alerts</CardTitle>
              <CardDescription>Alerts related to oil storage and distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Alert ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">ALT-1242</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Droplets className="h-4 w-4 text-blue-500 mr-2" />
                        Low Oil Level
                      </div>
                    </TableCell>
                    <TableCell>Kerosene Tank</TableCell>
                    <TableCell>Yesterday, 4:30 PM</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                        Medium
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                        Resolved
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Alerts</CardTitle>
              <CardDescription>General system and infrastructure alerts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center p-8 text-center text-muted-foreground">
                <div>
                  <CheckCircle2 className="mx-auto h-12 w-12 text-green-500 mb-4" />
                  <h3 className="text-lg font-medium mb-2">All Systems Operational</h3>
                  <p>There are currently no system alerts to display.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Alert History */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Alert History</CardTitle>
            <CardDescription>Recent resolved alerts and notifications</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <Clock className="h-4 w-4 mr-2" />
            View All History
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-lg border bg-gray-50">
              <div className="bg-green-100 p-2 rounded-full">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
              <div className="space-y-1 flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Low pressure alert resolved</p>
                  <Badge variant="outline" className="bg-green-100 text-green-800">
                    Resolved
                  </Badge>
                </div>
                <p className="text-xs text-gray-500">Lane 4 distribution line - Yesterday, 2:15 PM</p>
                <div className="flex items-center text-xs text-gray-500 mt-2">
                  <User className="h-3 w-3 mr-1" />
                  <span>Resolved by: Vikram Patel</span>
                  <ThumbsUp className="h-3 w-3 ml-4 mr-1" />
                  <span>Resolution: Pressure valve adjusted</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg border bg-gray-50">
              <div className="bg-green-100 p-2 rounded-full">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
              <div className="space-y-1 flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Oil level alert resolved</p>
                  <Badge variant="outline" className="bg-green-100 text-green-800">
                    Resolved
                  </Badge>
                </div>
                <p className="text-xs text-gray-500">Kerosene Tank - Yesterday, 5:30 PM</p>
                <div className="flex items-center text-xs text-gray-500 mt-2">
                  <User className="h-3 w-3 mr-1" />
                  <span>Resolved by: Anita Desai</span>
                  <ThumbsUp className="h-3 w-3 ml-4 mr-1" />
                  <span>Resolution: Tank refilled</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg border bg-gray-50">
              <div className="bg-green-100 p-2 rounded-full">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
              <div className="space-y-1 flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">High usage alert resolved</p>
                  <Badge variant="outline" className="bg-green-100 text-green-800">
                    Resolved
                  </Badge>
                </div>
                <p className="text-xs text-gray-500">Lane 1, House 23 - 2 days ago</p>
                <div className="flex items-center text-xs text-gray-500 mt-2">
                  <User className="h-3 w-3 mr-1" />
                  <span>Resolved by: System</span>
                  <ThumbsUp className="h-3 w-3 ml-4 mr-1" />
                  <span>Resolution: Usage returned to normal</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
