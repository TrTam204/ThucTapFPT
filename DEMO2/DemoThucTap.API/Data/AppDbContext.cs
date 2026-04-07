using Microsoft.EntityFrameworkCore;
using DemoThucTap.API.Models;
namespace DemoThucTap.API.Data
{
    public class AppDbContext : Microsoft.EntityFrameworkCore.DbContext
        {
            public AppDbContext(DbContextOptions<AppDbContext> options):base(options) { }
        public DbSet <Product> Products { get; set; }
        }
    }
