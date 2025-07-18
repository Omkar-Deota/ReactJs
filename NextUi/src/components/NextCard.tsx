import { Card, CardHeader, CardBody, Image } from "@heroui/react";

interface INextCard {
  name: string | undefined;
  age: number;
  type?: string;
}

export const NextCard = (props: INextCard) => {
  const { name, age, type } = props;

  return (
    <Card className="py-4 bg-yellow-500 w-fit rounded-md p-2 mx-auto">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">
          {name ?? "Suyash Sahu"}
        </p>
        <small className="text-default-500">{age}</small>
        <h4 className="font-bold text-large">{type ?? "No Type"}</h4>
      </CardHeader>

      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://heroui.com/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
  );
};
