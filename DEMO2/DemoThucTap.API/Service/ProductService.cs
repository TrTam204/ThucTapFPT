using DemoThucTap.API.Models;
using DemoThucTap.API.Repository;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DemoThucTap.API.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _productRepository;
        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }
        public async Task<IEnumerable<Product>> GetAllProductsAsync()
        {
            return await _productRepository.GetAllAsync();
        }
        public async Task<Product> GetProductByIdAsync(int id)
        {
            return await _productRepository.GetByIdAsync(id);
        }
        public async Task<Product> CreateProductAsync(Product product)
        {
            await _productRepository.AddAsync(product);
            return product;
        }
        public async Task<Product> UpdateProductAsync(int id, Product updatedProduct)
        {
            var product = await _productRepository.GetByIdAsync(id);

            if (product == null)
                return null;

            // Cập nhật các trường dữ liệu cần thiết
            product.Name = updatedProduct.Name;
            product.Price = updatedProduct.Price;

            await _productRepository.UpdateAsync(product);
            return product;
        }
        public async Task<bool> DeleteProductAsync(int id)
        {
            var product = await _productRepository.GetByIdAsync(id);

            if (product == null)
                return false;

            await _productRepository.DeleteAsync(product);
            return true;
        }
    }
}