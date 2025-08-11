import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardBannerProps {
  title: string;
  time : string;
  link : string;
}

export default function CardBanner({title,time , link}: CardBannerProps) {
  return (
    <Card className="w-fill w-100 gap-5 ml-5 text-center shadow-none dark py-4 ">
      <CardHeader>
        <CardTitle className="mb-2 text-3xl font-bold">
         {title}
        </CardTitle>
        <CardDescription className="text-base text-muted-foreground">
          {time}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-2 flex flex-row gap-2 justify-center">
        <Link href={link} className="text-purple-500">Click here to join Meet</Link>
      </CardContent>
    </Card>
  );
}
