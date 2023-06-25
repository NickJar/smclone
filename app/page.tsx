import Card from "@/components/Card";

const mockData = [
  {
    title: "Sierra Nevada",
    description: "A combination of greenery and rocky mountains",
    image: "/images/img1.jpg",
    id: 1,
  },
  {
    title: "Title",
    description: "Description",
    image: "/images/img1.jpg",
    id: 2,
  },
];

export default function Home() {
  console.log(mockData);
  return (
    <div className="flex overflow-auto flex-col justify-center gap-5">
      {mockData.map((data): any => {
        return (
          <div key={data.id}>
            <Card {...data} />
          </div>
        );
      })}
    </div>
  );
}
