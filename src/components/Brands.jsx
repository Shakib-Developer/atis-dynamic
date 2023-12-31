async function getData() {
  let res = await fetch(process.env.URL + "api/BrandList");
  if (!res.ok) {
    throw new Error("Brand Data is not success");
  }
  return res.json();
}

const Brands = async () => {
  const data = await getData();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h3 className="mb-16 text-2xl font-heading">
          Trusted by brands all over the world
        </h3>
        <div className="flex flex-wrap -mx-2">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-2"
              >
                <a href="#">
                  <img className="mx-auto h-8" src={item["image"]} alt="" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;
