import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="p-4 pt-0">
      <div className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0">
            <CardTitle className="text-sm font-normal text-muted-foreground">
              Total Pagáveis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="pb-0.5 text-2xl font-bold">R$ 45.231,89</div>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-green-700">
                +R$ 451,30 (20.1%) mês passado
              </span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0">
            <CardTitle className="text-sm font-normal text-muted-foreground">
              Cedentes Ativos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="pb-0.5 text-2xl font-bold">+2.350</div>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-green-700">+520 (180%)</span> mês passado
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
