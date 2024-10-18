import Link from "next/link";

async function getdata() {
  const response = await fetch(
    "https://app-tracking.pockethost.io/api/collections/drone_logs/records?filter=(drone_id=65010362)"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export default async function Home() {
  let blog = await getdata();
  const records = blog.items || []; // Adjust this based on the actual response structure

  if (!Array.isArray(records)) {
    return <div>Error: Data is not an array</div>;
  }
  return (
    <div className="p-8 font-von w-full h-full">
    <div className="flex flex-col bg-cream p-6 rounded-2xl shadow-2xl">
      
      <div className="flex flex-row justify-around items-center text-2xl gap-x-16 pb-10 font-bold">
        <div className="flex w-72 h-14 bg-kaki rounded-xl justify-center items-center">Create</div>
        <div className="flex w-72 h-14 bg-kaki rounded-xl justify-center items-center">Country</div>
        <div className="flex w-72 h-14 bg-kaki rounded-xl justify-center items-center">Drone ID</div>
        <div className="flex w-72 h-14 bg-kaki rounded-xl justify-center items-center">Drone Name</div>
        <div className="flex w-72 h-14 bg-kaki rounded-xl justify-center items-center">Celsius</div>
      </div>
      {records.map((data, index) => (
      <div className="flex pb-4 justify-around items-center text-xl gap-x-16 ">
        <div className="flex w-72 h-14 justify-center items-center">{ data.created }</div>
        <div className="flex w-72 h-14 justify-center items-center">{ data.country }</div>
        <div className="flex w-72 h-14 justify-center items-center">{ data.drone_id }</div>
        <div className="flex w-72 h-14 justify-center items-center">{ data.drone_name }</div>
        <div className="flex w-72 h-14 justify-center items-center">{ data.celsius }</div>
      </div>
      ))}
    </div>
  </div>
  
  );
}

