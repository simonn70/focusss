import Card from '@/components/Card';


const Home = () => {
  // const now = new Date();
  // const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  // const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

  return (
    <section className="flex size-full  items-center justify-center flex-wrap gap-5 text-white">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      


      
    </section>
  );
};

export default Home;
