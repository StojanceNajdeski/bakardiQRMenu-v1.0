import {
  pgTable,
  serial,
  text,
  numeric,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";

export const admins = pgTable("admins", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
});

export const dishes = pgTable("dishes", {
  id: serial("id").primaryKey(),
  categoryId: integer("category_id")
    .references(() => categories.id, {
      onDelete: "cascade",
    })
    .notNull(),
  name: text("name").notNull(),
  description: text("description"),
  price: numeric("price", { precision: 8, scale: 2 }).notNull(),
  imageUrl: text("image_url"),
});
