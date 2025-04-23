import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, Droplets, Flame, Layers, MapPin, Search, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MapViewPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Map View</h1>
          <p className="text-muted-foreground">Geographical view of the IntelliHUB system and infrastructure.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Export Map</Button>
          <Button>Print View</Button>
        </div>
      </div>

      {/* Map Controls */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input type="search" placeholder="Search locations..." className="pl-8" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter view" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Components</SelectItem>
              <SelectItem value="gas">Gas System</SelectItem>
              <SelectItem value="oil">Oil System</SelectItem>
              <SelectItem value="alerts">Alerts Only</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Layers className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <MapPin className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Map View */}
      <Card>
        <CardContent className="p-0">
          <div className="relative">
            <div className="h-[600px] w-full bg-slate-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <span className="text-slate-500">Interactive Map View</span>
              </div>
            </div>

            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-md border">
              <h3 className="text-sm font-medium mb-2">Map Legend</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-xs">Operational</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                  <span className="text-xs">Warning</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <span className="text-xs">Alert</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span className="text-xs">Oil Storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                  <span className="text-xs">Gas Distribution</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs Section */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="gas">Gas Network</TabsTrigger>
          <TabsTrigger value="oil">Oil Storage</TabsTrigger>
          <TabsTrigger value="alerts">Active Alerts</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>System Overview</CardTitle>
                <CardDescription>Summary of all system components</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Flame className="h-4 w-4 text-orange-500" />
                      <span className="text-sm font-medium">Gas Distribution Lines</span>
                    </div>
                    <Badge variant="outline" className="bg-green-100 text-green-800">
                      4 Active
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Droplets className="h-4 w-4 text-blue-500" />
                      <span className="text-sm font-medium">Oil Storage Tanks</span>
                    </div>
                    <Badge variant="outline" className="bg-green-100 text-green-800">
                      4 Active
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                      <span className="text-sm font-medium">Active Alerts</span>
                    </div>
                    <Badge variant="destructive">2 Critical</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
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
                        className="text-violet-500"
                      >
                        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                        <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"></path>
                      </svg>
                      <span className="text-sm font-medium">Connected Households</span>
                    </div>
                    <Badge variant="outline" className="bg-blue-100 text-blue-800">
                      342 Total
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Location Details</CardTitle>
                <CardDescription>Information about the selected location</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-6 text-center border rounded-md bg-gray-50">
                  <p className="text-muted-foreground">Select a location on the map to view details</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="gas" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gas Network</CardTitle>
              <CardDescription>Gas distribution network details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-md">
                  <h3 className="text-sm font-medium mb-2">Lane 1 Distribution</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500">Status</p>
                      <p className="text-sm font-medium flex items-center">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                        Operational
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Flow Rate</p>
                      <p className="text-sm font-medium">42.5 m³/h</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Households</p>
                      <p className="text-sm font-medium">86</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Pressure</p>
                      <p className="text-sm font-medium">5.1 bar</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-md">
                  <h3 className="text-sm font-medium mb-2">Lane 2 Distribution</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500">Status</p>
                      <p className="text-sm font-medium flex items-center">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                        Operational
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Flow Rate</p>
                      <p className="text-sm font-medium">53.8 m³/h</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Households</p>
                      <p className="text-sm font-medium">112</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Pressure</p>
                      <p className="text-sm font-medium">5.3 bar</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-md bg-red-50">
                  <h3 className="text-sm font-medium mb-2 text-red-800">Lane 3 Distribution</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-red-700">Status</p>
                      <p className="text-sm font-medium flex items-center text-red-800">
                        <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                        Alert
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-red-700">Flow Rate</p>
                      <p className="text-sm font-medium text-red-800">32.1 m³/h</p>
                    </div>
                    <div>
                      <p className="text-xs text-red-700">Households</p>
                      <p className="text-sm font-medium text-red-800">78</p>
                    </div>
                    <div>
                      <p className="text-xs text-red-700">Pressure</p>
                      <p className="text-sm font-medium text-red-800">4.9 bar</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-md">
                  <h3 className="text-sm font-medium mb-2">Lane 4 Distribution</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500">Status</p>
                      <p className="text-sm font-medium flex items-center">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                        Operational
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Flow Rate</p>
                      <p className="text-sm font-medium">24.6 m³/h</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Households</p>
                      <p className="text-sm font-medium">66</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Pressure</p>
                      <p className="text-sm font-medium">5.0 bar</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="oil" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Oil Storage</CardTitle>
              <CardDescription>Oil storage and distribution details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-md">
                  <h3 className="text-sm font-medium mb-2">Main Storage Tank</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500">Status</p>
                      <p className="text-sm font-medium flex items-center">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                        Operational
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Capacity</p>
                      <p className="text-sm font-medium">10,000 L</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Current Level</p>
                      <p className="text-sm font-medium">78% (7,800 L)</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Temperature</p>
                      <p className="text-sm font-medium">22.3°C</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-md">
                  <h3 className="text-sm font-medium mb-2">Kerosene Tank</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500">Status</p>
                      <p className="text-sm font-medium flex items-center">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                        Operational
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Capacity</p>
                      <p className="text-sm font-medium">5,000 L</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Current Level</p>
                      <p className="text-sm font-medium">65% (3,250 L)</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Temperature</p>
                      <p className="text-sm font-medium">21.8°C</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-md">
                  <h3 className="text-sm font-medium mb-2">Diesel Tank</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500">Status</p>
                      <p className="text-sm font-medium flex items-center">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                        Operational
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Capacity</p>
                      <p className="text-sm font-medium">3,000 L</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Current Level</p>
                      <p className="text-sm font-medium">92% (2,760 L)</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Temperature</p>
                      <p className="text-sm font-medium">22.1°C</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-md">
                  <h3 className="text-sm font-medium mb-2">Reserve Tank</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500">Status</p>
                      <p className="text-sm font-medium flex items-center">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                        Full
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Capacity</p>
                      <p className="text-sm font-medium">2,000 L</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Current Level</p>
                      <p className="text-sm font-medium">100% (2,000 L)</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Temperature</p>
                      <p className="text-sm font-medium">21.5°C</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Alerts</CardTitle>
              <CardDescription>Current alerts on the map</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-md bg-red-50">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-red-800">Gas leak detected</h3>
                      <p className="text-xs text-red-700 mt-1">Lane 3, House 45 - Detected at 10:23 AM today</p>
                      <div className="mt-2">
                        <Button size="sm" variant="outline" className="mr-2 bg-white">
                          View on Map
                        </Button>
                        <Button size="sm" className="bg-red-600 hover:bg-red-700">
                          Respond
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-md bg-red-50">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-red-800">Pressure spike detected</h3>
                      <p className="text-xs text-red-700 mt-1">Lane 2 main pipeline - Detected at 11:05 AM today</p>
                      <div className="mt-2">
                        <Button size="sm" variant="outline" className="mr-2 bg-white">
                          View on Map
                        </Button>
                        <Button size="sm" className="bg-red-600 hover:bg-red-700">
                          Respond
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-md bg-amber-50">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-amber-800">High usage detected</h3>
                      <p className="text-xs text-amber-700 mt-1">Lane 2, House 17 - 45% higher than average</p>
                      <div className="mt-2">
                        <Button size="sm" variant="outline" className="mr-2 bg-white">
                          View on Map
                        </Button>
                        <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                          Monitor
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
