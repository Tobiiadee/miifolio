/** @format */

type WrapperType = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: WrapperType) {
  return (
    <section className=' laptop:ml-28 mt-8 h-screen pt-8 px-4 laptop:px-14'>
      {children}
    </section>
  );
}
