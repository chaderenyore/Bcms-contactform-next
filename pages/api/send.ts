// import { NextApiRequest, NextApiResponse } from 'next';

// interface APIType {
//   name: string;
//   email: string;
//   message: string;
// }

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === 'POST') {
//       const { name, email, message } = req.body as APIType;
  
//       try {
//         console.log('Sending email:', { name, email, message });
//         const data = { message: 'Message sent successfully' };
  
//         return res.status(200).json(data);
//       } catch (error) {
//         return res.status(500).json({ error: 'Message sending failed' });
//       }
//     } else {
//       return res.status(405).end('Method not allowed');
//     }
//   }
