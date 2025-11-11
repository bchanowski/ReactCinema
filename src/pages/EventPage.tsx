import EventBtn from "../components/Events/EventBtn";
import Title from "../components/Title/Title";

const EventPage = () => {
  return (
    <div>
      <div className="text-center">
        <Title text="Event Page" side="left" color="white" />
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="text-white flex w-[350px] h-[500px] justify-center items-center border-1 border-white rounded-lg m-10">
          EVENT IMAGE
        </div>
        <div className="w-[60%] text-white mt-10">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lacinia odio non lectus interdum venenatis. Cras vulputate nunc a
            tortor imperdiet, sed eleifend nibh varius. Donec in neque dictum,
            blandit diam ut, congue purus. Donec elementum, diam sit amet
            eleifend tincidunt, nisl nibh egestas mi, ut tincidunt felis ante at
            risus. Aenean id nibh ac nibh accumsan consectetur. Nullam dictum
            sapien id purus hendrerit placerat. Etiam elit nulla, blandit at
            luctus quis, hendrerit eget magna. Aliquam dictum rutrum tristique.
            Morbi eu pulvinar nunc, accumsan egestas neque. Phasellus tempus
            dictum tincidunt. Vivamus sapien turpis, dapibus vel congue ac,
            auctor quis orci. Proin urna ante, consectetur sit amet iaculis eu,
            bibendum in turpis. Proin cursus accumsan purus id interdum. Donec
            pharetra interdum lacus sit amet euismod. Curabitur convallis varius
            urna ut ullamcorper. Fusce rutrum vitae metus quis dignissim.
            Maecenas sit amet eros pharetra, maximus sapien sit amet, auctor
            leo. Mauris quis purus eu nisi blandit molestie. Aliquam imperdiet
            lobortis nibh. Sed interdum convallis porttitor. Maecenas aliquet
            justo ante, vitae lobortis quam sagittis quis. In quam orci,
            venenatis et consectetur vitae, rutrum eu massa. Vivamus accumsan
            commodo velit eu efficitur. Quisque sit amet felis maximus, euismod
            dolor sit amet, imperdiet odio. Quisque viverra magna justo, ac
            lobortis libero pulvinar a. Praesent ex odio, pulvinar nec elementum
            et, tincidunt at sem. Sed id tristique orci, eu sodales velit. Sed
            semper cursus ipsum eu blandit. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Nulla
            facilisi. Aenean purus diam, faucibus a facilisis at, pulvinar a
            nulla.
          </p>
          <div className="h-[150px]">
            <EventBtn when="3rd October" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
