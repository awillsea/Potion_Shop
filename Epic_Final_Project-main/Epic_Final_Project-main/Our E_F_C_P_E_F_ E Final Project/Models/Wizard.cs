using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace Our_E_F_C_P_E_F__E_Final_Project
{
    [Table("wizards")]
    public class Wizard
    {
        [ExplicitKey]
        public string wizard_id { get; set; }
        public string wizard_first_name { get; set; }
        public string wizard_last_name { get; set; }
        public string? wizard_picture { get; set; }


        public static MySqlConnection DB;

        async public static void preScaryWizardReset()
        {
            List<Wizard> test = new List<Wizard>();
            test = await APICall.GetInventors();
            scaryResetWiz(test);
        }

        public static void scaryResetWiz(List<Wizard> x) //refreshes or gets all potions again
        {
            //MySqlConnection db = new MySqlConnection(DAL.CS);
            DB.Open();
            foreach (Wizard item in x)
            {
                DB.Insert(item);
            }
            DB.Close();

        }
        public static List<Wizard> GetAllWizards()
        {
            DB.Open();
            var result = DB.GetAll<Wizard>().ToList();
            DB.Close();

            return result;
        }

        public static Wizard GetOneWiz(string id)
        {
            DB.Open();
            var result = DB.Get<Wizard>(id);
            DB.Close();

            return result;
        }
        public static Wizard AddOneWiz(Wizard newWizard)
        {
            Wizard wz = newWizard;
            
            DB.Open();
            DB.Insert(wz);
            DB.Close();
            return wz;
        }
    }
}
