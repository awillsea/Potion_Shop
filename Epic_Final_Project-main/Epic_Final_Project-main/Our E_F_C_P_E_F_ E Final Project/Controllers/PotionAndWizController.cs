using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Our_E_F_C_P_E_F__E_Final_Project.Controllers
{
    [Route("allinfo")]
    [ApiController]
    public class PotionAndWizController : ControllerBase
    {
        [HttpGet]
        public List<PotionAndWiz> GetAll()
        {
            return PotionAndWiz.GetAllInfo();
        }
        [HttpGet("{id}")]
        public PotionAndWiz GetOne(string id)
        {
            return PotionAndWiz.GetOneInfo(id);
        }
      
    }
}
