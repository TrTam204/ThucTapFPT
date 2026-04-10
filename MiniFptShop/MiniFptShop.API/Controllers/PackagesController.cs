using Microsoft.AspNetCore.Mvc;
using MiniFptShop.API.Data;
using MiniFptShop.API.Models;


namespace MiniFptShop.API.Controllers
{
    [Route("api/[controller]")] 
    [ApiController]
    public class PackagesController : ControllerBase
    {
        private readonly AppDbContext _context;
        public PackagesController(AppDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult GetAllPackages()
        {
            var packages = _context.Packages.ToList();
            return Ok(packages);
        }
    }
}