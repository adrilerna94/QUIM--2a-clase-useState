import {Card, CardBody, Typography } from "@/components/ui";


export default function Home() {
  return (
    <main className="flex items-center min-h-screen justify-center bg-gray-900 text-white">
      <Card className="w-full max-w-lg shadow-xl border border-gray-700 bg-gray-800">
        <CardBody className="text-center flex flex-col gap-4">
          <Typography variant="h2" color="amber" className="font-bold">
            🚀 Bienvenidos a la Misión: use State
          </Typography>
        </CardBody>
      </Card>
    </main>
  );

}
