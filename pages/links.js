import LinkCard from "../components/LinkCard";

const Links = () => {
   return (
      <section className="py-40">
         <article className="w-4/5 mx-auto flex justify-around">
            <ul className="flex flex-col lg:flex-row gap-10">
               <LinkCard
                  image={"/link-card-1.jpg"}
                  alt={"Steam Workshop Mod Image depicting Crusader Kings 3 characters with EPE mod assets"}
                  link={"https://steamcommunity.com/sharedfiles/filedetails/?id=2507209632"}
                  title={"Steam Workshop Mod"}
                  desc={"The official Steam Workshop page of the Expanded Portraits and Ethnicities Mod."}
               />
               <LinkCard
                  image={"/link-card-2.jpg"}
                  alt={"Discord logo"}
                  link={"https://discord.gg/xdSAeDPT8y"}
                  title={"Discord Server"}
                  desc={"The official server of the Expanded Mods collection."}
               />
               <LinkCard
                  image={"/link-card-3.jpg"}
                  alt={"Discord logo"}
                  link={"https://forum.paradoxplaza.com/forum/threads/wip-ethnicities-and-portraits-expanded.1445050/"}
                  title={"Paradox Forum Official Thread"}
                  desc={"The dedicated mod thread on the official Paradox Forums."}
               />
            </ul>
         </article>
      </section>
   );
}

export default Links;