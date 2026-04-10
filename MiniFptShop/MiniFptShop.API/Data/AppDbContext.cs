using Microsoft.EntityFrameworkCore;
using MiniFptShop.API;
using MiniFptShop.API.Models;
namespace MiniFptShop.API.Data
{ 
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
    public DbSet<Package> Packages { get; set; }
    public DbSet<Order> Orders { get; set; }
}
}