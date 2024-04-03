// Import the Commerce module
import CommerceSDK from '@chec/commerce.js'

// Create a Commerce instance
const commerce = new CommerceSDK(process.env.NEXT_PUBLIC_CHECK_PUBLIC_API_KEY)

export default commerce
