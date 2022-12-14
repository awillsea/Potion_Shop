using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace Our_E_F_C_P_E_F__E_Final_Project
{
    [Table("PotionAndWiz")]
    public class PotionAndWiz
    {
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

        public string wizard_id { get; set; }
        public string wizard_first_name { get; set; }
        public string wizard_last_name { get; set; }
        public string? wizard_picture { get; set; }

        public static MySqlConnection DB;
        public static List<PotionAndWiz> GetAllInfo()
        {
            DB.Open();
            var result = DB.GetAll<PotionAndWiz>().ToList();
            DB.Close();

            return result;
        }
        public static PotionAndWiz GetOneInfo(string id)
        {
            DB.Open();
            var result = DB.Get<PotionAndWiz>(id);
            DB.Close();

            return result;
        }
        
    }
}
