import BarChart from "@/components/BarChart";
import Card, { CardContent, CardProps } from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import Image from "next/image";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,231.89",
    description: "+20.1% from last month",
    icon: DollarSign,
  },
  {
    label: "Subscription",
    amount: "+2350",
    description: "+180.1% from last month",
    icon: Users,
  },
  {
    label: "Sales",
    amount: "+12,234",
    description: "+19% from last month",
    icon: CreditCard,
  },
  {
    label: "Active Now",
    amount: "+573",
    description: "+201 from last month",
    icon: Activity,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />
      <section
        className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all 
      sm:grid-cols-2 
      xl:grid-cols-4"
      >
        {cardData.map((eachCard, i) => (
          <Card
            key={i}
            amount={eachCard.amount}
            description={eachCard.description}
            icon={eachCard.icon}
            label={eachCard.label}
          />
        ))}
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <BarChart />
        </CardContent>
        <CardContent>
          <p>Recent Sales</p>
          <p className="text-sm text-gray-400">You made 265 sales this month</p>

        </CardContent>
      </section>
    </div>
  );
}
