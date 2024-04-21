import { DataTableComponent } from '@/components/Cards/DataTable'
import General from '@/components/Cards/General'
import { TableComponent } from '@/components/Cards/Table'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

export default function Home() {
  return (
    <div className="grid gap-[32px]">
      <div className="grid xl:grid-cols-2 gap-[32px]">
        <General />
        <div className="grid gap-[32px]">
          <Card />
          <Card />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-[32px] lg:h-[300px] mb-[32px]">
        <Card className="h-[300px]">Hello world</Card>
        <Card className="overflow-y-scroll ">
          <CardHeader>
            <CardTitle>Orders</CardTitle>
            <CardDescription>
              These are the orders of this month.
            </CardDescription>
          </CardHeader>
          <div className="px-4 max-h-[350px]">
            <TableComponent />
          </div>
        </Card>
        <Card className="overflow-y-scroll ">
          <CardHeader>
            <CardTitle>Orders</CardTitle>
            <CardDescription>
              These are the orders of this month.
            </CardDescription>
          </CardHeader>
          <div className="px-4">
            <DataTableComponent />
          </div>
        </Card>
      </div>
    </div>
  )
}
