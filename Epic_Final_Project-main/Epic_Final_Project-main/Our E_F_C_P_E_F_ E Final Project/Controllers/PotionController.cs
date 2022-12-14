using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Our_E_F_C_P_E_F__E_Final_Project.Controllers
{
    [Route("potion")]
    [ApiController]
    public class PotionController : ControllerBase
    {
        [HttpGet]
        public List<Potion> GetAll()
        {
            return Potion.GetAllPotions();
        }
        [HttpGet("{id}")]
        public Potion Get(string id)
        {
            return Potion.GetOne(id);
        }

        //wishlist admin 
        [HttpPut]
        public Potion Update(Potion x)
        {
            Potion.UpdatePotion(x);
            return x;
        }
        [HttpGet("allInfo")]
        public List<PotionAndWiz> AllInfo()
        {
            return PotionAndWiz.GetAllInfo();
        }

        [HttpPost]
        public Potion Add(Potion x)
        {
            return Potion.CreatePotion(x);
        }

        [HttpDelete]
        public void DELETE(string id)
        {
            Potion.DELETEPotion(id);
        }
    }
}
