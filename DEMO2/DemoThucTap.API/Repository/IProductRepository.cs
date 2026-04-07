using DemoThucTap.API.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace DemoThucTap.API.Repository
{
    public interface IProductRepository
    {
        Task<IEnumerable<Product>> GetAllAsync();
        Task<Product> GetByIdAsync(int id);
        Task AddAsync(Product product);
        Task UpdateAsync(Product product);
        Task DeleteAsync(Product product);
    }
}
