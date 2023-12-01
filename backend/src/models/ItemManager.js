const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "soul" as configuration
    super({ table: "soul" });
  }

  // The C of CRUD - Create operation

  async create(soul) {
    // Execute the SQL INSERT query to add a new soul to the "soul" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name) values (?)`,
      [soul.name]
    );

    // Return the ID of the newly inserted soul
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific soul by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the soul
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "soul" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing soul

  // async update(soul) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an soul by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = ItemManager;
