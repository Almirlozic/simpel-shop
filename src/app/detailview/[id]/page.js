import Image from "next/image";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";
import { IoChevronBackOutline } from "react-icons/io5";
import { getProduct } from "@/app/lib/api";

const DetailView = async ({ params }) => {
  const { id } = await params;

  const data = await getProduct(id);

  return (
    <div className="grid grid-cols-2 mt-20 gap-20 px-10">
      <div className="border p-10 flex justify-center relative">
        <Link href="/products">
          <div className="absolute top-2 left-2 flex gap-2 items-center cursor-pointer bg-white px-3 py-1 rounded">
            <IoChevronBackOutline />
            <p>GO BACK</p>
          </div>
        </Link>
        <Image
          src={data.images?.[0]}
          alt={data.title}
          width={400}
          height={400}
          className="object-cover"
        />
      </div>

      <div className="mt-10 space-y-4 leading-loose">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
      <div className=" col-span-2 border-b mt-10"></div>
      <h2 className="text-center text-4xl col-span-2">
        Reviews
      </h2>
      <div className="flex justify-center col-span-2 gap-50 mb-20">
        {data.reviews?.map((review, index) => {
          return (
            <div key={index}>
              <p className="flex gap-1 mb-2">
                {Array.from({
                  length: review.rating,
                }).map((_, i) => (
                  <FaRegStar size={30} key={i} />
                ))}
              </p>
              <p>{review.comment}</p>
              <p className="text-sm">
                {review.reviewerName}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailView;
