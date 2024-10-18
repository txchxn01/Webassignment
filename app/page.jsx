import Link from "next/link";

async function getdata() {
  const response = await fetch(
    "https://api-pi-seven-52.vercel.app/configs/65010362"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export default async function Home() {
  let blog = await getdata();
  console.log(blog);  // Log the entire response to see what data is available
  
  return (
    <div className="p-16 pt-28 font-von w-full h-full">
      <div className="grid place-content-center">
        <div className="text-4xl font-bold p-4 rounded-xl">Configuration</div>
        <div className="text-3xl bg-cream rounded-2xl shadow-2xl">
          <div className="p-8">
            <div>Drone ID : {blog.drone_id}</div>
            <div>Drone Name : {blog.drone_name}</div>
            <div>Light : {blog.light}</div>
            <div>Country : {blog.country}</div>
            <div>Max Speed : {blog.max_speed}</div>
            <div>Population : {blog.population ? blog.population : 'N/A'}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

