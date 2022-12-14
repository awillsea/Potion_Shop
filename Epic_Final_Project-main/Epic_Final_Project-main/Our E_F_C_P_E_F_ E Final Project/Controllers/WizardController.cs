using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Our_E_F_C_P_E_F__E_Final_Project.Controllers
{
    [Route("wizard")]
    [ApiController]
    public class WizardController : ControllerBase
    {
        [HttpPost]
        public Wizard Save(Wizard newWizard)
        {
           return  Wizard.AddOneWiz(newWizard);
        }
        [HttpGet]
        public List<Wizard> GetAll()
        {
            return Wizard.GetAllWizards();
        }
        [HttpGet("{id}")]
        public Wizard Get(string id)
        {
            return Wizard.GetOneWiz(id);
        }
        

    }
}
