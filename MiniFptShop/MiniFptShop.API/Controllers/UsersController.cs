using Microsoft.AspNetCore.Mvc;
using MiniFptShop.API.Data;
using MiniFptShop.API.Models;

namespace MiniFptShop.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UsersController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetUsers()
        {
            return Ok(_context.Users.ToList());
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] RegisterRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Username) || string.IsNullOrWhiteSpace(request.Password))
            {
                return BadRequest(new { message = "Username and password are required." });
            }

            if (_context.Users.Any(u => u.Username == request.Username))
            {
                return BadRequest(new { message = "Tên đăng nhập đã tồn tại." });
            }

            var user = new User
            {
                Username = request.Username,
                Password = request.Password,
                Role = request.Role ?? "User"
            };

            _context.Users.Add(user);
            _context.SaveChanges();

            return Ok(new AuthResponse(user.Id, user.Username, user.Role));
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Username) || string.IsNullOrWhiteSpace(request.Password))
            {
                return BadRequest(new { message = "Username and password are required." });
            }

            var user = _context.Users.FirstOrDefault(u => u.Username == request.Username && u.Password == request.Password);
            if (user == null)
            {
                return Unauthorized(new { message = "Tên đăng nhập hoặc mật khẩu không đúng." });
            }

            return Ok(new AuthResponse(user.Id, user.Username, user.Role));
        }
    }

    public record RegisterRequest(string Username, string Password, string? Role);
    public record LoginRequest(string Username, string Password);
    public record AuthResponse(int Id, string Username, string Role);
}
