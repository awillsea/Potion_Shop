using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace Our_E_F_C_P_E_F__E_Final_Project
{
    [Table("potion")]
    public class Potion
    {
        [ExplicitKey]
        public string id { get; set; }
        public string potion_name { get; set; }
        public string? photoUrl { get; set; }
        public string effects { get; set; }
        public string? sideEffects { get; set; }
        public string? characteristics { get; set; }
        public int price { get; set; }
        public bool inStock { get; set; }
        //public string?[] ingredient_id { get; set; }
        public string createdBy { get; set; }


        public static MySqlConnection DB;


            async public static void preScaryReset ()
        {
                List<Potion> test = new List<Potion>();
                test = await APICall.GetPotions();
                scaryReset(test);
        }

          public static void scaryReset (List<Potion> x) //refreshes or gets all potions again
        {
            DB.Open();
            foreach (Potion item in x)
            {
                DB.Insert(item);
            }
            DB.Close();

        }

        public static List<Potion> GetAllPotions ()
        {
            DB.Open();
            var result = DB.GetAll<Potion>().ToList();
            DB.Close();

            return result;
        }

        public static Potion GetOne(string id)
        {
            DB.Open();
            var result = DB.Get<Potion>(id);
            DB.Close();

            return result;
        }
        public static Potion CreatePotion(Potion x)
        {
            
            Potion newPotion = new Potion();
            newPotion = x;
            DB.Open();
            DB.Insert(newPotion);
            DB.Close();
            return newPotion;
        }
        public static void UpdatePotion (Potion x)
        {
            DB.Open();

            DB.Update(x);

            DB.Close();
        }
       
        public static void DELETEPotion(string id)
        {
            Potion newPotion = new Potion() { id = id };
            DB.Open();
            DB.Delete(newPotion);
            DB.Close();
        }

    }
}
