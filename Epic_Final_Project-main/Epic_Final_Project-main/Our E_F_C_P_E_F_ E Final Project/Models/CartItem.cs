using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;
using Dapper;

namespace Our_E_F_C_P_E_F__E_Final_Project
{
    [Table("CartAndPotion")]
    public class StinkyCartItem
    {
        [Key]
        public int ci_id { get; set; }
        public string potion_name { get; set; }
        public int price { get; set; }
        public string photoUrl { get; set; }
    }
    [Table("cartItems")]
    public class CartItems
    {
        [Key]
        public int ci_id { get; set; }
        public string potion_id { get; set; }


        public static MySqlConnection DB;

        public static List<StinkyCartItem> GetCartItems ()
        {
            DB.Open();

            var result = DB.GetAll<StinkyCartItem>().ToList();

            DB.Close();

            return result;
        }

        public static void AddToCart(string potionId)
        {
            DB.Open();

            CartItems newPotion = new CartItems();
            newPotion.potion_id = potionId;
            DB.Insert(newPotion);
            DB.Close ();
        }

        public static void DeleteOne(int cartId)
        {
            DB.Open();
            CartItems superStinky = new CartItems() {ci_id = cartId };
            DB.Delete(superStinky);  

            DB.Close();
        }
    }
}
//getallitems