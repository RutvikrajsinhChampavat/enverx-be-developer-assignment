import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("blogs").del();

  // Inserts seed entries
  await knex("blogs").insert([
    {
      blog_id: 1,
      title: "Blog 1",
      category: "Sports",
      description:
        "rest worth writer president invented while few mine whispered star dear stage depend length replied cattle week higher nor call center should hurry major",
      is_deleted: false,
    },
    {
      blog_id: 2,
      title: "Blog 2",
      category: "News",
      description:
        "noted everything colony hunt outline slide pine living call choose whom progress manufacturing dropped leaving cover tide numeral given seven swept shine attempt beauty",
      is_deleted: false,
    },
    {
      blog_id: 3,
      title: "Blog 3",
      category: "Sports",
      description:
        "skin warm bit railroad ten captured lesson lose weight thick amount smile hat spend bar like cloud brown cover separate call guard clean pick",
      is_deleted: false,
    },
    {
      blog_id: 4,
      title: "Blog 4",
      category: "Films",
      description:
        "round wrote became tank were pack deeply birth sit die syllable cloud immediately weight row last storm vowel trick circus prize paper wherever house",
      is_deleted: false,
    },
    {
      blog_id: 5,
      title: "Blog 5",
      category: "Educational",
      description:
        "fifteen worker is lucky brave build widely certainly final underline key seeing air teeth plenty fur noise moon free slow prevent cloth dear beyond",
      is_deleted: false,
    },
    {
      blog_id: 6,
      title: "Blog 6",
      category: "Technology",
      description:
        "cry dawn never military package living arrive earlier tower rough merely fell finally joy worry since size quiet off slope read all lady fellow",
      is_deleted: false,
    },
    {
      blog_id: 7,
      title: "Blog 7",
      category: "Films",
      description:
        "fact told wonderful strip yard race harbor grandmother again population passage ahead terrible blow jar truck continued rod handsome failed tune edge clean state",
      is_deleted: false,
    },
    {
      blog_id: 8,
      title: "Blog 8",
      category: "Educational",
      description:
        "syllable verb active lesson face recognize prepare slabs north chair breathe sat gravity damage club may been rubbed symbol still idea gas they waste",
      is_deleted: false,
    },
    {
      blog_id: 9,
      title: "Blog 9",
      category: "Technology",
      description:
        "loose earn essential gun carbon ring tobacco thick she alive there solve either old still use only taught soil chair found football goose local",
      is_deleted: false,
    },
    {
      blog_id: 10,
      title: "Blog 10",
      category: "Technology",
      description:
        "western dropped relationship frighten trunk everything frequently herself fear clearly addition green trail writing surrounded finest church lead spoken pupil correctly fell ability open",
      is_deleted: false,
    },
  ]);
}
