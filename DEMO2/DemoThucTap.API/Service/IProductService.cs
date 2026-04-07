using DemoThucTap.API.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DemoThucTap.API.Services
{
    public interface IProductService
    {
        Task<IEnumerable<Product>> GetAllProductsAsync();
        Task<Product> GetProductByIdAsync(int id);
        Task<Product> CreateProductAsync(Product product);
        Task<Product> UpdateProductAsync(int id,  Product product);
        Task<bool> DeleteProductAsync(int id);
    }
}