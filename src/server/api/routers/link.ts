import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

const messageLink:string[]=[]
export const linksRouter = createTRPCRouter({
  getLinks: publicProcedure.query(({}) => {
    console.log('messageLink',messageLink)
    return messageLink;
  }),

  create: publicProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .mutation(({ input }) => {
        console.log(
            'creating',input.text
        )
      return messageLink.push(input.text);
    }),
});
