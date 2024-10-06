const CategoryTitle = ({ title, bg }: { title: string; bg: string }) => {
  return (
    <section className={bg}>
      <div className="max-w-[1400px] mx-auto">
        <h1 className="md:text-h2 text-white md:px-[120px] md:py-[80px] font-bold md:leading-[120%] ">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default CategoryTitle;
