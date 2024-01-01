import { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse){
    try {        
        res.send({msg:"hello"})
      } catch (error:any) {
        res.send({ msg: error.message,  issue: true });
      }
}
