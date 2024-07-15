import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-24 relative h-full bg-center bg-cover bg-no-repeat bg-opacity-50">
        <Card className="w-[500px] space-y-2">
          <CardHeader className="items-center">
            <CardTitle className="text-4xl font-bold">
              This is a prototype
            </CardTitle>
            <CardDescription className="space-y-4">
              This is a prototype that does amazing things. It is built by the
              great people at intuity.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Textarea placeholder="Enter some text. Nothing will happen." />
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 w-full">
            <Button asChild className="w-full">
              <a href="https://www.intuity.de/">Get in touch</a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
