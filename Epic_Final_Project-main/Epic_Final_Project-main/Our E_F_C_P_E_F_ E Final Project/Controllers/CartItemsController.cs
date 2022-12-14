using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Our_E_F_C_P_E_F__E_Final_Project.Controllers
{
    [Route("cartitems")]
    [ApiController]
    public class CartItemsController : ControllerBase
    {
        [HttpGet]
        public List<StinkyCartItem> GetAll()
        {
            return CartItems.GetCartItems();
        }

        [HttpPost("{id}")]
        public void AddToCart(string id)
        {
            CartItems.AddToCart(id);

        }
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            CartItems.DeleteOne(id);
            
        }


    }
}
